export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      behavior: 'smooth',
      top: element.offsetTop - 80,
    });
  }
};