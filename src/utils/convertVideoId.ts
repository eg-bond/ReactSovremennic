export function convertVideoId(originalId: string): string {
  const [ownerId, videoId] = originalId.split('_');
  return `${ownerId}&id=${videoId}`;
}
