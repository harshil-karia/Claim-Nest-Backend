import { NestFactory } from '@nestjs/core';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AppModule } from '../../app.module';
import { Template, TemplateDocument } from '../schemas/template.schema';
import { STATIC_TEMPLATES } from '../../modules/templates/constant/template.constant';

async function seedTemplates() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const templateModel = app.get<Model<TemplateDocument>>(
      getModelToken(Template.name),
    );

    for (const template of STATIC_TEMPLATES) {
      await templateModel.updateOne(
        { code: template.code },
        {
          $set: {
            name: template.name,
            description: template.description,
            category: template.category,
            pageCount: template.pageCount,
            pageSize: template.pageSize,
            htmlContent: template.htmlContent,
            isActive: template.isActive,
          },
        },
        { upsert: true },
      );
    }

    console.log(
      `Templates seeded successfully (${STATIC_TEMPLATES.length} template(s)).`,
    );
  } catch (error) {
    console.error('Failed to seed templates:', error);
    process.exitCode = 1;
  } finally {
    await app.close();
  }
}

void seedTemplates();
