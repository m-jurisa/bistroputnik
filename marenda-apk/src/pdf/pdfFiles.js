import { File, Paths } from "expo-file-system";

function uniqueDestination(fileName) {
  const dotIndex = fileName.lastIndexOf(".");
  const baseName = dotIndex > -1 ? fileName.slice(0, dotIndex) : fileName;
  const extension = dotIndex > -1 ? fileName.slice(dotIndex) : "";

  for (let index = 1; index < 100; index += 1) {
    const candidateName = index === 1 ? fileName : `${baseName}-${index}${extension}`;
    const candidate = new File(Paths.document, candidateName);
    if (!candidate.exists) {
      return candidate;
    }
  }

  return new File(Paths.document, `${baseName}-${Date.now()}${extension}`);
}

export async function persistPdfWithFileName(tempUri, fileName) {
  const source = new File(tempUri);
  const destination = uniqueDestination(fileName);

  await source.copy(destination);
  return destination.uri;
}
