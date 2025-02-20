interface CPcheckboxProps {
    title?: string;
    fields: string[];
    onChange: (name:string,action:'add'|'remove') => void;
    errorMsg?: string;
  }
  
  
  const CPcheckbox = (props: CPcheckboxProps) => {
    const { title, fields, onChange, errorMsg } = props;
    const chkBoxOnchange =(e:any)=>{
        const action = e.target.checked ? 'add':'remove';
        onChange(e.target.name,action);
    }
    return (
      <div>
        {title ?? <label>{title}</label>}
        {fields.map((field) => (
          <>
          <input type="checkbox" name={field} value={field} onChange={chkBoxOnchange} />
          <label>{field}</label>
          </>
        ))}
        <label style={{ visibility: errorMsg ? "visible" : "hidden" }}>
          {errorMsg}
        </label>
      </div>
    );
  };
  
  export default CPcheckbox;
  