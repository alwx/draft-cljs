export default (onClick) => (
  (props) => {
    const { href } = props;
    return <a {...props} onClick={() => onClick(href)} />
  }
);