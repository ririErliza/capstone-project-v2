
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useState, useLayoutEffect } from 'react'

// https://
// POST
// a valid Donation is made by the following properties:
// name <-- string
// email <-- string
// phone <-- string | number
// numberOfShoes <-- string | number
// dropPoints <-- string

const DonationForm = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
})
 

  const [Donation, setDonation] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    numberOfShoes:1,
    dropPoints:'Depok',
  })

  
  const submitDonation = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://reviver-backend.herokuapp.com/donors',
        {
          method: 'POST',
          body: JSON.stringify(Donation),
          headers: {
            'Content-Type': 'application/json',
           
          },
        }
      )
      if (response.ok) {
        
        alert('Form submitted!')
      
        setDonation({
            name: '',
            surname: '',
            email: '',
            phone: '',
            numberOfShoes:1,
            dropPoints:'Depok',
        })
      } else {
        // aww snap!
        alert('error!')
        // I'll not reset the form in this case
      }
    } catch (error) {
      console.log(error)
      // this is conceptually equivalent to the last .catch() block
    }
  }

  return (
    <section className="donation-wrapper">
    <Container className=" text-green px-5 py-5">
    <Row className="justify-content-center my-4">
        <Col xs={12} md={6} className="text-center form-box">
      <h2 className='py-4'>DONATION FORM</h2>
      <div >
      <Form onSubmit={submitDonation}>
        <Form.Group>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here..."
            value={Donation.name}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setDonation({
                ...Donation,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Donation state property
                name: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your surname</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here..."
            value={Donation.surname}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setDonation({
                ...Donation,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Donation state property
                surname: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="type here..."
            value={Donation.email}
            // initially is going to be ''
            onChange={(e) => {
              console.log(e.target.value)
              
              setDonation({
                ...Donation,
                // the spread operator is bringing in here all the existing
                // key/value pairs of the existing Donation state property
                email: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your phone</Form.Label>
          <Form.Control
            type="tel"
            required
            placeholder="type here..."
            value={Donation.phone}
            onChange={(e) => {
            
              setDonation({
                ...Donation,
                phone: e.target.value,
              })
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many shoes are you donating?</Form.Label>
          <Form.Control
            as="select"
            required
            value={Donation.numberOfShoes}
            onChange={(e) => {
              
              setDonation({
                ...Donation,
        
                numberOfShoes: e.target.value,
              })
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>
        
        <Form.Group>
          <Form.Label>Please choose one of our drop point?</Form.Label>
          <Form.Control
            as="select"
            required
            value={Donation.dropPoints}
            onChange={(e) => {
              
              setDonation({
                ...Donation,
        
                dropPoints: e.target.value,
              })
            }}
          >
            <option>Depok</option>
            <option>Cilegon</option>
            <option>Bandung</option>
            <option>Jogjakarta</option>
            <option>Semarang</option>
            <option>Surabaya</option>
            <option>Malang</option>
            <option>Lampung</option>
          </Form.Control>
        </Form.Group>
        
        
        
        <Button className="button-contact mb-1 mb-sm-0 mx-5 my-4" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </Col>
      </Row>
    </Container>
    </section>
  )
}

export default DonationForm
