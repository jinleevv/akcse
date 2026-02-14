import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');

async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function optimizeImages() {
  console.log('Scanning for images in:', PUBLIC_DIR);
  
  try {
    const allFiles = await getFiles(PUBLIC_DIR);
    const imageFiles = allFiles.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to process.`);

    for (const file of imageFiles) {
      const dir = path.dirname(file);
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const webpPath = path.join(dir, `${name}.webp`);

      // Check if webp already exists
      try {
        await fs.access(webpPath);
        // console.log(`Skipping ${file} - WebP already exists`);
        // continue; 
        // Uncomment above to skip existing, but for now we might want to overwrite to ensure quality settings
      } catch {
        // File doesn't exist, proceed
      }

      console.log(`Optimizing: ${path.relative(PUBLIC_DIR, file)} -> ${path.relative(PUBLIC_DIR, webpPath)}`);

      try {
        const image = sharp(file);
        const metadata = await image.metadata();

        let pipeline = image;

        // Resize if width is larger than 1200px
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200 });
        }

        await pipeline
          .webp({ quality: 80 })
          .toFile(webpPath);
        
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }

    console.log('Image optimization complete!');

  } catch (err) {
    console.error('Error scanning directories:', err);
  }
}

optimizeImages();
