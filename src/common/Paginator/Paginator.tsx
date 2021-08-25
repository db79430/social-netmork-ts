import React, {useState} from "react";
import {PageSize, UsersMapsType} from "../../Users/UsersClassContainer";
import styles from './Paginator.module.css'




export const Paginator = React.memo( (props: UsersMapsType & PageSize) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pageCount / props.portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1)* portionNumber + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    function cn(param: {}, pageNumber: any) {
        return "";
    }

    return ( <><div className={styles.paginator}
                    {...portionNumber > 1 &&
                    <button onClick={() => {setPortionNumber(portionNumber  - 1)} }>PREV</button>
                    }>
            <div>
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
                        .map(p => {
                        return <span className={cn ({ [styles.selectedPage]: props.currentPage === p}, styles.pageNumber)}
                                     key={p}

                            onClick={(e) => {
                                props.onPageChange(p)
                            }}>{p}</span>
                    })}
                {portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}

            </div>
        </div>
        </>

    )
})