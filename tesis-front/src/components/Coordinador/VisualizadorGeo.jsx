import Cabecera from "../ComponentesAuxiliares/Cabecera";
import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import customerImg from "../../assets/Custommer.svg"
import "./VisualizadorGeo.css"

const fetcher = (...args) => fetch(...args).then(response => response.json());

const Marker = ({ children }) => children;

const MarkerFather = ({FBbedBVi3fUFpf8}) => father

const customers = [
  {id:1884, lat:-30.97484, lng: -64.09584},
  {id:23410, lat:-30.97543, lng: -64.08923},
  {id:33775, lat:-30.97896, lng: -64.06845},
  {id:42990, lat:-30.97838, lng: -64.09599},
  {id:52731, lat:-30.97942, lng:-64.09803},
  {id:688444, lat:-30.97945, lng: -64.09923},
  {id:71573, lat:-30.98244, lng: -64.0929},
  {id:83618, lat:-30.98259, lng: -64.09073},
  {id:91098, lat:-30.98224, lng: -64.08765},
  {id:12329, lat:-30.98281, lng: -64.08659},
  {id:21145, lat:-30.98246, lng: -64.08346},
  {id:38844, lat:-30.98316, lng: -64.08921},
  {id:41098, lat:-30.98392, lng: -64.08985},
  {id:53216, lat:-30.9848,  lng:-64.0886},
  {id:6687, lat:-30.99127, lng: -64.09612},
  {id:72990, lat:-30.99145, lng: -64.09635},
  {id:834100, lat:-30.99795, lng: -64.08983},
  {id:92649, lat:-31.00667, lng:-64.1067},
  {id:12341, lat:-31.00519, lng: -64.08015},
  {id:23520, lat:-31.01371, lng: -64.07104},
  {id:31393, lat:-31.02019, lng: -64.06431},
  {id:4694, lat:-31.02185, lng: -64.11436},
  {id:53247, lat:-31.03024, lng: -64.10668}
]
export const VisualizadorGeo=()=> {
  const items = [
    {url:'/informacionCliente',titulo:'Informacion Cliente'},
    {url:'/CargaInformacionProducto',titulo:'Carga Información Productos'},
  ];

  const points = customers.map(customer =>({
      type:"Feature",
      properties:{
          cluster:false,
          customerId:customer.id,
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
  return (
    <>
      <Cabecera titulo={"Visualizador Geo"} items={items}/>
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCeP72AM7ec6pKplQVA" }}
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
              if (isCluster){   
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
                  <img src={customerImg} alt="Test de imagen" style={{width:"40px"}}/>
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






