export default function AdminLayoutLogin({children}) {
    return(
        <div>
            <h2 className="text-5xl">Admin</h2>
            
            <div className="bg-amber-300"></div>
            <div>
                {children}
            </div>
        </div>
           
    );

}