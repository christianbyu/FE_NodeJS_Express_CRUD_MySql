import { useState,useEffect } from "react";
import axios from "axios";
 const koneksiMahasiswa = axios.create({
   baseURL: "http://127.0.0.1:5000/api/mahasiswa"
});
export default function FormMahasiswa() {
    const [statenama, setNama] = useState("");
    const [statenim, setNim] = useState("");
    const [mahasiswa, setMahasiswa] =  useState(null);
       useEffect(() => {
      async function getMahasiswa() {
        const response = await koneksiMahasiswa.get("/").then(function (axiosResponse) {         setMahasiswa(axiosResponse.data.data);
         })
         .catch(function (error) {
          alert('error from mahasiswa in api mahasiswa: '+error);
         });;
          }
      getMahasiswa();
    }, []);
if(mahasiswa==null){
return(
  <div>
    waiting...
  </div>
)
}else{
  function handleEdit(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  function handleDelete(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <form >
        {/* onSubmit={handleSubmit}> */}
          <table border={0}>
            <tbody>
            <tr>
            <td> <label> nim:</label></td>
            <td><input type="text" id="nim"  value={statenim} />
              {/* onChange={handleOnchangeNim}  /> */}
              </td>
        </tr>
        <tr>
            <td>  <label> nama:</label></td>
            <td><input type="text" id="nama"  value={statenama}
              // onChange={(e) => setNama(e.target.value)}
               /></td>
        </tr>
        <tr>
            <td>  <label> Foto:</label></td>
            <td>   <input
                    type="file" name="foto"/>  </td>
        </tr>
        <tr>
            <td>  <label> Tanggal Lahir:</label></td>
            <td>  <input type="date" value="2018-07-22"
           min="1970-01-01" max="2025-12-31"/>
     </td>
        </tr>
        <tr>
            <td>  <label> alamat:</label></td>
            <td><textarea  id="address" style={{resize: "none"}} /></td>
        </tr>
            </tbody>
          </table>
          <input type="submit" />
                  </form>  

                  <br/>
        <br/>
        <br/>
           <table border={1}>
            <thead>
                <tr><td>Nim</td>
                <td>Nama</td></tr>
            </thead>
            <tbody>
            {mahasiswa.map((mhs) =>
                <tr>
                    <td>{mhs.nim}</td>
                    <td>{mhs.nama}</td>
                    <td><img src={mhs.foto} width="80"/></td>
                    <td>{mhs.tanggal_lahir}</td>
                    <td>{mhs.alamat}</td>
                   <td><button onClick={handleEdit} value={mhs.nim}>edit</button></td>
                   <td><button onClick={handleDelete} value={mhs.nim}>delete</button></td>
                </tr>
           )};     
                   </tbody>
          </table>  
          </div>
        )
}
 
  }
   

