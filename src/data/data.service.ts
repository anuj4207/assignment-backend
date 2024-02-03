import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DataService {
  constructor(private prisma: PrismaService) {}

  async addData(data: any) {
    try {
      let msg = await this.prisma.data.create({ data: { mydata: data } });

      return { msg: 'success' };
    } catch (error) {
      return { msg: 'error' };
    }
  }
  async updateData(data: string, id: number) {
    try {
      await this.prisma.data.update({
        where: { id: id },
        data: { mydata: data },
      });
      return { msg: 'success' };
    } catch (error) {
      return { msg: 'error' };
    }
  }
  async getData() {
    try {
      let data = await this.prisma.data.findMany({});
      return { msg: 'success', data: data };
    } catch (error) {
      return { msg: 'error' };
    }
  }
}
