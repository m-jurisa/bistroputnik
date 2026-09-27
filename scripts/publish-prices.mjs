import { publish, verify, verifyExport } from './lib/price-publications.mjs';

try {
  const root = process.cwd();
  if (process.argv.includes('--verify') || process.argv.includes('--verify-export')) {
    const result = process.argv.includes('--verify-export') ? verifyExport(root) : verify(root);
    console.log(`Price files verified: ${result.fullCount} services, ${result.dailyCount} daily dishes; ${result.manifest.publications.length} archived files.`);
  } else {
    const manifest = publish(root);
    console.log(`Price publications ready for deployment (${manifest.publications.length} files).`);
    console.log('Upload the complete out/ directory after building. Keep the cjenici archive on the server.');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
