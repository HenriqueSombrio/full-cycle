import './Title.css'

interface TitleProps {
  color?: string;
  onClick?: () => void;
}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  const { color = 'black', children, onClick } = props

  return (
    <h1 className="Title" style={{
      color: color
    }}
    onClick={onClick}>
      {children}
    </h1>
  );
}