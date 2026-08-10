import {
  app,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { CosmosClient } from "@azure/cosmos";
import { randomUUID } from "crypto";

type ContactRequestBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const cosmosEndpoint = process.env.COSMOS_ENDPOINT;
const cosmosKey = process.env.COSMOS_KEY;
const databaseName = process.env.COSMOS_DATABASE;
const containerName = process.env.COSMOS_CONTACT_CONTAINER;

function getContainer() {
  if (!cosmosEndpoint || !cosmosKey || !databaseName || !containerName) {
    throw new Error("Cosmos DB configuration is incomplete.");
  }

  const client = new CosmosClient({
    endpoint: cosmosEndpoint,
    key: cosmosKey,
  });

  return client.database(databaseName).container(containerName);
}

export async function contact(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log("Contact form request received.");

  try {
    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          message: "All fields are required.",
        },
      };
    }

    if (name.length > 100) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          message: "Name is too long.",
        },
      };
    }

    if (
      email.length > 200 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          message: "Please enter a valid email address.",
        },
      };
    }

    if (message.length < 10 || message.length > 2000) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          message: "Message must be between 10 and 2000 characters.",
        },
      };
    }

    const contactMessage = {
      id: randomUUID(),
      name,
      email,
      subject,
      message,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const container = getContainer();

    await container.items.create(contactMessage);

    context.log("Contact message saved to Cosmos DB.", {
      id: contactMessage.id,
      subject: contactMessage.subject,
    });

    return {
      status: 201,
      jsonBody: {
        success: true,
        message: "Your message was received successfully.",
      },
    };
  } catch (error) {
    context.error("Unable to process contact request.", error);

    return {
      status: 500,
      jsonBody: {
        success: false,
        message: "Unable to save your message. Please try again later.",
      },
    };
  }
}

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  route: "contact",
  handler: contact,
});