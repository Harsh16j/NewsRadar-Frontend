import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
    return (
        <div className="text-center" style={{ paddingBottom: "10px" }}>
            <img src={loading} alt="loading" />
        </div>
    );
}

// export default class Spinner extends Component {
//   render() {
//     return (
//       <div className="text-center">
//         <img src={loading} alt="loading" />
//       </div>
//     );
//   }
// }
