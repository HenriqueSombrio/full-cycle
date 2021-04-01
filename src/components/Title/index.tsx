import './Title.css'

interface TitleProps {
  color?: string;
}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  return (
    <h1 className="Title" style={{
      color: props.color
    }}>
      {props.children}
    </h1>
  );
}