
import { Link } from 'react-router-dom';

interface Props{
    text: string;
    route: string;
    link: string;
}

const Links = (props: Props) => {
    const {route, text, link} = props;
    return (
        <div style={{
            display: "flex",
            gridGap: "10px",
            margin: "0 auto",
            justifyContent: "center",
            marginTop: "1rem"
        }}>
            <label>{text}</label>
            <Link to={route}
                style={{
                    textDecoration: "none",
                    color: "#794726",
                    fontWeight: "600"
                }}>
                {link}
            </Link>
        </div>
    )
}


export default Links;
