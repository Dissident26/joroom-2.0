import { INestApplication } from '@nestjs/common/interfaces';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const applySwagger = <T>(app: INestApplication<T>) => {
  //TODO: check options of disabling this in prod mode
  const config = new DocumentBuilder().setTitle('Joroom 2.0 API').setDescription('Joroom 2.0 API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
