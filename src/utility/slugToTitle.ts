export const slugToTitle = (slug: string) => {
  // replace dashes with spaces
  const title = slug.replace(/_/g, " ");
  // capitalize first letter of each word
  return title.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  });
};
