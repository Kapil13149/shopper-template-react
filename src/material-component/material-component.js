import { Button, TextField } from "@mui/material";
export function MaterialComponent() {
    return (
        <div className="container-fluid">
            <h2>Bootstrap Button</h2>
            <button type="button" className="btn btn-primary">Register</button>

            <h2>React MUI Textfield</h2>
            <TextField label="Email" variant="outlined" />

            <h2>React MUI Button</h2>
            <Button variant="contained" color="success">Register</Button>


        </div>
    );
}