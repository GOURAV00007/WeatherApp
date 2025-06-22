import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info})
{
    const IMG_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const IMG_HOT = "https://images.unsplash.com/photo-1535304902304-466bec5bf8e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const IMG_COLD = "https://images.unsplash.com/photo-1634380365304-7288cf5067bc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const IMG_RAIN = "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            {/* <h1>Weather---{info.weather}</h1> */}
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={info.humidity>80?IMG_RAIN:info.temp>15?IMG_HOT:IMG_COLD}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature -- {info.temp}&deg;C</p>
                    <p>Humidity -- {info.humidity}</p>
                    <p>Min Temp -- {info.tempMin}</p>
                    <p>Max Temp -- {info.tempMax}</p>
                    <p>The weather can be dexribe as <i>{info.weather}</i> and feels Like -- {info.feelsLike}&deg;C</p>
                  </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}