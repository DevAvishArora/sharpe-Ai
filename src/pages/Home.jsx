import { Typography, Card, CardContent, CardMedia, Grid, Container } from "@mui/material";
import heroImage from "../assets/hero.jpeg";
import demoImage1 from "../assets/hero.jpeg";
import demoImage2 from "../assets/hero.jpeg";
import demoImage3 from "../assets/hero.jpeg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#383833" , height: '100vh'}}>
    
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={heroImage} 
                alt="Hero Image"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ padding: "20px" }}>
              <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                Welcome to the Home Page
              </Typography>
              <Typography variant="body1" paragraph style={{ color: "white" }}>
                This is a creative home page with an attractive hero section.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Demo Cards Section */}
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {[demoImage1, demoImage2, demoImage3].map((image, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card style={{ padding: "20px" , backgroundColor: '#4e5244' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={`Demo Image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h5" style={{ color: "white" }}>Demo Card {index + 1}</Typography>
                  <Typography variant="body2" color="textSecondary" style={{ color: "white" }}>
                    This is a demo card description.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
