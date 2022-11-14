import Cabecera from "../ComponentesAuxiliares/Cabecera";
import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import customerImg from "../../assets/Custommer.svg"
import "./VisualizadorGeo.css"

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;


export const VisualizadorGeo=()=> {
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];
  const customers = [
    {Id:1 , lat:-30.9955615,lng:-64.1067163},
    {Id:2 , lat:-30.9955615,lng:-64.1066163},
    {Id:3 , lat:-30.9954615,lng:-64.1065163},
    {Id:4 , lat:-30.9953615,lng:-64.1064163},
    {Id:5 , lat:-30.9952615,lng:-64.1063163},
    {Id:6 , lat:-30.9951615,lng:-64.1062163},
    {Id:7 , lat:-30.9950615,lng:-64.1061163},
  ]
  const points = customers.map(customer =>({
      type:"Feature",
      properties:{
          cluster:false,
          customerId:customer.Id,
      },
      geometry: {
        type: "Point",
        coordinates: [
          parseFloat(customer.lng),
          parseFloat(customer.lat)
        ]
      }
      }))
      const [zoom, setZoom] = useState(10) 
      const [bounds, setBounds] = useState(null)
      const mapRef = useRef();
      const {clusters, supercluster} = useSupercluster({
        points,
        bounds,
        zoom,
        options:{radius:75, maxZoom:20}
      })
      console.log(clusters)
  return (
    <>
      <Cabecera titulo={"Visualizador Geo"} items={items}/>
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCeP72AM7ec6pKplQVAFBbedBVi3fUFpf8" }}
          defaultCenter={{ lat: -30.9956615, lng: -64.1070163 }}
          defaultZoom={14.75}
          onChange={({zoom,bounds})=>{
              setZoom(zoom);
              setBounds([bounds.nw.lng,
                         bounds.se.lat,
                         bounds.se.lng,
                         bounds.nw.lat])
          }} 
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map})=>{
            mapRef.current = map;
          }}         
          >
            {clusters.map(cluster=>{
              const [longitude, latitude] = cluster.geometry.coordinates;
              const {cluster: isCluster} = cluster.properties
              console.log("paso")
              if (isCluster){
                console.log("paso por donde no hay nada")                
                return (   
                  <Marker key={cluster.id}  lat={latitude} lng={longitude}>  
                   <div className="cluster-maker" 
                        style={{ width:`${10 + ( cluster.properties.point_count/points.length ) * 30 }px`,
                                 height:`${10 + ( cluster.properties.point_count/points.length ) * 30 }px`}}
                        onClick={()=>{
                          const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id),20)
                          mapRef.current.setZoom(expansionZoom);
                          mapRef.current.panTo({lat:latitude,lng:longitude});
                        }}>
                      {cluster.properties.point_count}
                   </div>
                  </Marker>);
              }else{
                return(
                <Marker key={cluster.properties.customerId}  lat={latitude} lng={longitude}>  
                  <button >
                  <img src={customerImg} alt="Test de imagen" style={{width:"100px"}}/>
                  </button>
                </Marker>)
              }
            }
            )}
        </GoogleMapReact>
      </div>
    </>
  );
}






