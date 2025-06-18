import styles from './style.module.css';

function ResponseData({ Data }){
    const { local, tempo, situacao } = Data;

    return(
        <div className={styles.responseData}>
            <p>{local}</p>
            <div>
                <h2>{tempo}</h2>
                <p>{situacao}</p>
            </div>
        </div>
    )
}
export default ResponseData