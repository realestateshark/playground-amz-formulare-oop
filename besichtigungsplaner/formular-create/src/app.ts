import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'


export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    return {
        statusCode: 201,
        headers: {
            'content-type': 'application/json',
            'location': `${formularBaseUrl}/besichtigungsplaner/${record.fId}`,
        },
        body: JSON.stringify(response),
    }
}
