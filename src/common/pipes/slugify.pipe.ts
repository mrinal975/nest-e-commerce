import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SlugifyPipe implements PipeTransform {
  transform(value: string) {
    if (typeof value != 'string') {
      throw new BadRequestException('Value must be a string');
    }
    return this.slugify(value);
  }
  private slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with dashes
      .replace(/[^\w-]+/g, '') // Remove all non-word characters
      .replace(/--+/g, '-') // Replace multiple dashes with a single one
      .replace(/^-+|-+$/g, ''); // Trim dashes from the start and end
  }
}
