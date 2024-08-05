import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Navbar from "../components/Navbar"
export default function Home() {
    return (
        <Navbar>
            <Box className="flex flex-col items-start w-[400px] mx-auto gap-5">
                <Typography variant='h3'>Bill Info</Typography>
                <Box className="flex flex-col items-center gap-[50px] w-[500px] mx-auto" sx={{ border: "2px", borderRadius: "10px", padding: "" }}>
                    <TextField id="outlined-basic" label="username" variant="outlined" className='w-full' />
                    <TextField id="outlined-basic" label="product" variant="outlined" className='w-full' />
                    <TextField id="outlined-basic" label="Quantity" variant="outlined" className='w-full' />
                    <TextField id="outlined-basic" label="address" variant="outlined" className='w-full' />
                    <TextField id="outlined-basic" label="price" variant="outlined" className='w-full' />

                </Box>

            </Box>
        </Navbar>
    )
}
