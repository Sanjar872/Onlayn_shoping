import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ButtonDiv, ContactBtn, ContactDiv, Container, Input, Inputs, InputsDiv, Text, Texts, Title } from './ContactStyle';

  
const Contact = () => {

  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Container>
          <ContactDiv>
            <Texts>
            <Title>Contact Us</Title>
            <Text>
              Say Hello send us your thoughts about our products or share
              your ideas with our Team!
            </Text>
            </Texts>
            <InputsDiv>
              <Inputs>
                <Input id="standard-basic" label="First name" variant="standard" />
                <Input id="standard-basic" label="Last name" variant="standard" />
                <Input id="standard-basic" label="Email" variant="standard" />
                <FormControl variant="standard" sx={{ m: 1, marginLeft: 2.5, maxWidth: 300 }}>
                    <InputLabel id="demo-simple-select-standard-label">Subject</InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="Subject"
                    >
                      
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Input id="standard-basic" label="Message" variant="standard" />
              </Inputs>
            </InputsDiv>
            <ButtonDiv>
              <ContactBtn>SEND</ContactBtn>
            </ButtonDiv>
          </ContactDiv>
      </Container>
    </div>
  )
}

export default Contact;