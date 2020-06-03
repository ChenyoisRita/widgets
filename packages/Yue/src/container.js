import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import './style/customStyle.css';
import ChangeHistoryTwoToneIcon from '@material-ui/icons/ChangeHistoryTwoTone';
import ChartDemo from "./chart";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const themeSelected = createMuiTheme({
  typography: {
    button: {
      // backgroundColor: "#44C5BB",
      boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
      borderRadius: "7px",

      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "10px",
      lineHeight: "15px",
      textAlign: "center",
      color: "#FFFFFF",
      // width: "70px",
      // height: "20px",
      width: "60px",
      height: "25px",
      lineHeight: "10px",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


export function SimpleContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={"container"}>
          <Typography component="div">
              <div style={{marginTop: '20px', marginBottom: '20px'}}>
          
              <div>
                <div className={"header"} style={{paddingTop: '41px', paddingLeft: '39px'}}>
                    4,291
                </div>
                <p className={"bodyTxt"} style={{paddingLeft: '40px'}}>
                    Total Number of your Connections
                </p>
              </div>

              <div className={"row"} style={{paddingLeft: '40px'}}>
                <div className="col-4">
                  <div className={"header"} >
                      13
                  </div>
                
                  <div className={"bodyTxt"} >
                      In weekly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 78.7 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected} >
                       <Button variant="button" style={{backgroundColor: "#44C5BB", color: '#FFFFFF'}}>
                            Week
                        </Button>
                    </ThemeProvider>
                  </div>

                </div>

                <div className="col-4">
                  <div className={"header"} >
                      27
                  </div>
                
                  <div className={"bodyTxt"} >
                      In monthly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 11.6 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected}>
                      <Button variant="button" style={{color: "#44C5BB"}}>
                        Month
                      </Button>
                    </ThemeProvider>
                  </div>

                </div>

                <div className="col-4">
                  <div className={"header"}>
                      216
                  </div>
                
                  <div className={"bodyTxt"} >
                      In yearly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 2.2 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected}>
                      <Button variant="button"  style={{color: "#44C5BB"}}>
                        Year
                      </Button>
                    </ThemeProvider>
                  </div>
                </div>
              </div>

              <br></br>
              <div style={{paddingLeft: '40px', paddingRight: '40px'}}>
              <ChartDemo />
              </div>
              <br></br>

              <div className={"row"} style={{paddingLeft: '40px'}}>
                <div className="col-4">
                  <div className={"header"}>
                      29
                  </div>
                
                  <div className={"bodyTxt"} >
                      In weekly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 46.3 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected} >
                        <Button variant="button" style={{backgroundColor: "#44C5BB", color: '#FFFFFF'}}>
                              Week
                          </Button>
                      </ThemeProvider>
                  </div>
                </div>

                <div className="col-4" >
                  <div className={"header"} >
                      129
                  </div>
                  <div className={"bodyTxt"} >
                      In monthly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 19.6 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected}>
                      <Button variant="button" >
                        Month
                      </Button>
                    </ThemeProvider>
                  </div>
                </div>

                <div className="col-4">
                  <div className={"header"}>
                      341
                  </div>
                  <div className={"bodyTxt"} >
                      In yearly
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 4.68 %)</div>
                  </div>
                  <br></br>
                  <div>
                    <ThemeProvider theme={themeSelected}>
                      <Button variant="button" >
                        Year
                      </Button>
                    </ThemeProvider>
                  </div>
                </div>
              </div>

              <br></br>
              <div style={{paddingLeft: '40px', paddingRight: '40px'}}>
                <ChartDemo />
              </div>
              <br></br>

              <div className={"header"} style={{paddingLeft: '39px'}}>
                  Top Friends on Interaction
             </div>

              <br></br>

             <div className={"row"} style={{paddingLeft: '40px'}}>
                <div className="col-4">
                  <ThemeProvider theme={themeSelected}>
                      <Button variant="button" style={{backgroundColor: "#44C5BB", color: '#FFFFFF'}}>
                        Week
                      </Button>
                  </ThemeProvider>
                </div>

                <div className="col-4">
                  <ThemeProvider theme={themeSelected}>
                      <Button variant="button" >
                        Month
                      </Button>
                  </ThemeProvider>
                </div>

                <div className="col-4">
                  <ThemeProvider theme={themeSelected}>
                      <Button variant="button" >
                        Month
                      </Button>
                  </ThemeProvider>
                </div>
             </div>

              <br></br>

              <div className={"row"} style={{paddingLeft: '45px'}}>
                <div className="col-4" >
                  <Avatar alt="Remy Sharp" src="https://github.com/mui-org/material-ui/blob/master/docs/public/static/images/avatar/1.jpg?raw=true" className={classes.large}/>
                  <p className="bodyTxt">
                    <div style={{paddingLeft: '10px'}}>Remy</div>
                    <div style={{paddingLeft: '10px'}}>Sharp</div>
                  </p>
                </div>

                <div className="col-4">
                  <Avatar className="col-4" alt="Travis Howard" src="https://github.com/mui-org/material-ui/blob/master/docs/public/static/images/avatar/2.jpg?raw=true" className={classes.large}/>
                  <p className="bodyTxt">
                    <div style={{paddingLeft: '10px'}}>Travis</div>
                    <div style={{paddingLeft: '5px'}}>Howard</div>
                  </p>
                </div>

                <div className="col-4" >
                  <Avatar className="col-4" alt="Cindy Baker" src="https://github.com/mui-org/material-ui/blob/master/docs/public/static/images/avatar/3.jpg?raw=true" className={classes.large}/>
                  <p className="bodyTxt">
                    <div style={{paddingLeft: '10px'}}> Cindy </div>
                    <div style={{paddingLeft: '10px'}}> Baker </div>
                  </p>
                </div>
              </div>

              <div className={"row"} style={{paddingLeft: '40px', paddingBottom: '41px'}}>
                <div className="col-4">
                  <div className={"header"}>
                      16
                  </div>
                
                  <div className={"bodyTxt"} >
                      Total
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 46.3 %)</div>
                  </div>
                  
                </div>
                
                <div className="col-4" >
                  <div className={"header"} >
                      12
                  </div>
                  <div className={"bodyTxt"} >
                      Total
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 19.6 %)</div>
                  </div>
                  
                </div>

                <div className="col-4">
                  <div className={"header"}>
                      8
                  </div>
                  <div className={"bodyTxt"} >
                      Total
                  </div>
                  <div className={"row"} style={{color: '#319D5A'}}>
                    <ChangeHistoryTwoToneIcon />
                    <div className={"rateTxt"}>(+ 4.68 %)</div>
                  </div>
                  
                </div>
              </div>

            </div>
          </Typography>

      </Container>
    </React.Fragment>
  );
}