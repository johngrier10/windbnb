import('./Host.css')



const Host = (props) => {
    
    const superHostStyle = {
        fontSize: '1rem',
        color: '#fff'
    }
    
    
    return (
        <div>
       
            <p className="host" style={superHostStyle} >super host</p>
         
        </div>
    )
}

export default Host
