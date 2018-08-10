const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')
const { argv } = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
})

let getInfo = async ( direccion ) => {

    try {
        let coors = await getLugarLatLng( direccion )
        let clima = await getClima( coors.lat, coors.lgn )

        return `El clima en ${ coors.direccion } es de ${ clima }° C`
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`
    }
    
}

getInfo( argv.direccion )
    .then( resp => console.log(resp) )
    .catch( e => console.log(e) )

