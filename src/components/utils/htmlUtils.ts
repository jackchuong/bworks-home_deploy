/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from 'path';
import { readFileSync } from 'fs';
import matter from 'gray-matter';

export interface MatterData {
  content: string;
  data: { title: string; slug: string; date: string };
  isEmpty: boolean;
  excerpt: string;
}

export const loadHtml = (relativePath: string): MatterData => {
  // try {
  //   const fullPath = join(process.cwd(), relativePath);
  //   const fileContent = readFileSync(fullPath, 'utf8');
  //   return matter(fileContent) as MatterData;
  // } catch (err) {
  //   console.err(err);
  // }
  return null;
};
