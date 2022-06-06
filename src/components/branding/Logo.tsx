interface Size {
  size: number;
}

export const Logo = (props: Size) => {
  return (
    <img
      style={{ width: `${props.size}px` }}
      src="img/logo.svg"
      alt="BlockSwan Family"
    />
  );
};
