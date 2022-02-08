import react from "react";
import { Link } from "react-router-dom";

const Table = (props) =>{
    return (
        <div>
        <table style={{ marginTop: "2rem",border:"2rem"}}>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Details</th>
            </tr>
            {props.toggle &&
                props.posts.map((post) => (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>

                    <td>
                    <Link to={`/bookDetails/${post.id}`}>
                        <button>Show Book</button>
                    </Link>
                    </td>
                </tr>
                ))}
            </tbody>

      </table>
        </div>
    )
}

export default Table;