import { Card } from "react-bootstrap";

const Todos = ({todo, deleteTodo}) => {
    return (
        <Card className="border-0 rounded-0 list-group">
            <Card.Body className="list-group-item" onClick={() => deleteTodo(todo.id)}>{todo.content}</Card.Body>
        </Card>
    )
}

export default Todos;