import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from "@material-ui/core/FormControl";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormHelperText from "@material-ui/core/FormHelperText";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login"  />
          <Tab label="Register"  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="username">Username</InputLabel>  */}
                    <TextField id="username" label="Username *" variant="standard" />
                </FormControl> 
                <br/>
                <br/>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="username">Username</InputLabel>  */}
                    <TextField id="password" label="Password *" variant="standard" />
                </FormControl> 
                <br/>
                <br/>
                <Button variant="contained" color="primary" >LOGIN</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="firstName">First Name</InputLabel>  */}
                    <TextField id="firstName" label="First Name *" variant="standard" />
                    <FormHelperText>
                        <span className="red">required</span>
                    </FormHelperText>
                </FormControl> 
                <br/>
                <br/>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="lastname">Last Name</InputLabel>  */}
                    <TextField id="lastname" label="Last Name *" variant="standard" />
                    <FormHelperText>
                <span className="red">required</span>
              </FormHelperText>
                </FormControl> 
                <br/>
                <br/>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="email">Email</InputLabel>  */}
                    <TextField id="email" label="Email *" variant="standard" />
                    <FormHelperText>
                <span className="red">required</span>
              </FormHelperText>
                </FormControl> 
                <br/>
                <br/>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="password">Password</InputLabel>  */}
                    <TextField id="password" label="Password *" variant="standard" />
                    <FormHelperText>
                <span className="red">required</span>
              </FormHelperText>
                </FormControl> 
                <br/>
                <br/>
                <FormControl required className="formControl">
                {/* <InputLabel htmlFor="contactNo">Contact No</InputLabel>  */}
                <TextField id="contactNo" label="Contact No *" variant="standard"/>
                <FormHelperText>
                <span className="red">required</span>
              </FormHelperText>
                </FormControl> 
                <br/>
                <br/>
                <Button variant="contained" color="primary" >REGISTER</Button>
        </div>
      </TabPanel>
    </Box>
  );
}
