import {FastifyInstance} from 'fastify'
import { testGameController } from "../controllers/test"

export async function testGameRoutes(server: FastifyInstance)
{
    server.get('/test-route', testGameController)
}