
    const getApartments = async ()  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/apartment");
        const jsonResponse = await response.json();
        return jsonResponse;
      }


      const getApartment = async (id)  => {
        const response  = await fetch("https://api-rentapp.herokuapp.com/apartment/"+id);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      }

const ApartmentService = {
          getApartments,
          getApartment
}

export default ApartmentService;