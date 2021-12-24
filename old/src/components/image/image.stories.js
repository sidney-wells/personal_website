import Image from '.';

const story = {
  title: 'Atoms/Image',
  component: Image
};

export default story;

const Template = args => <Image {...args} />;

export const ImageSmall = Template.bind({});
ImageSmall.args = {
  size: 's'
};

export const ImageMedium = Template.bind({});
ImageMedium.args = {
  size: 'm'
};

export const ImageLarge = Template.bind({});
ImageLarge.args = {
  size: 'l'
};

export const ImageFill = Template.bind({});
ImageFill.args = {
  size: 'fill'
};
