import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'

const Preview = () => {
    return <div style={{hieght:"100%"}}>
        <JsonView src={{"name":123}} enableClipboard={false}/>
    </div>
}

export default Preview