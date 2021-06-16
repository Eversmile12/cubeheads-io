
import styled from "styled-components"
import React, {useState, useEffect} from "react"

const PaginationItem = styled.a`
    cursor: pointer;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    color: #FFFFFA;

    :not(:last-child){
        margin-right: 1.5rem;
    }
    &.current{
        box-shadow: 3px 3px 1.5rem rgb(0 0 0 / 20%);
        background: #FF305E;
    }

    :hover{
        
        box-shadow: 3px 3px 1.5rem rgb(0 0 0 / 10%);
        background: #FF305E;
        color: #FFFFFA;
    }

    @media screen and (max-width: 870px ){
        :not(:last-child){
            margin-right: .7rem;
        }
    }
 

`;

const PaginationButton = styled.button`
    background: #FF305E;
    border: none;
    font-weight: 600;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 4px 0 0 4px;
    color: #FFFFFA;
    :last-child{
        border-radius: 0 4px 4px 0;
    }
    :hover{
        opacity:.7
    }

    @media screen and (max-width: 677px ){
        width: 50%;
        :last-child{
            border-left: 2px solid #FFFFFA;
        }
    }
`;

const PaginationContainer = styled.div `
    display: flex;
    flex-direction: rows;
    justify-content: center;
    margin-top: 4rem;
`

const PagesWrapper = styled.div`
    background: #0E1526;
    padding: 1rem 3rem;
    @media screen and (max-width: 677px ){
        display: none;
    }
`;



export default function Pagination({totalItems, perPage, onClickHandler}){
    const [currentPage, setCurrentPage] = React.useState(1)
    const [firstPage, setFirstPage] = React.useState(1)
    const [lastPage, setLastPage] = React.useState(perPage)
    const numOfPages = Math.ceil(totalItems / perPage)



    useEffect(() => {
        console.log("setting last and first page")
        if(currentPage == lastPage-1 || currentPage == lastPage){
            if(lastPage+3 <= numOfPages){
                setLastPage(lastPage+3)
                setFirstPage(firstPage+3)
            }

        }else if(firstPage != 1){
            if(currentPage == firstPage+1 || currentPage == firstPage){
                if(firstPage-3 >= 1){
                    setLastPage(lastPage-3)
                    setFirstPage(firstPage-3)
                }
                
            }
        }
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(1)
        console.log("setting current page", currentPage)
    }, [totalItems])



    // 

    function changePage(page){
        console.log(page, numOfPages)
        if(page < 1 || page > numOfPages){
            return
        }
        if(page > 1 && page < numOfPages ){
            
        }else if(page == 1){
            setFirstPage(page)
            const newLastPage = page > numOfPages ? numOfPages : perPage
            setLastPage(newLastPage)
            
        }else if(page == numOfPages){
            console.log("last page reached")
            setLastPage(page)
            const newFirstPage = page-(perPage-1) < firstPage ? 1 : page-(perPage-1)
            setFirstPage(newFirstPage)
        }

        onClickHandler(page)
        setCurrentPage(page);
    }
    console.log("Total page: ", numOfPages)
    console.log("First page", firstPage)
    console.log("Last page", lastPage)
    console.log("Current page", currentPage)

    const pages = []
    for(let i = firstPage; i < lastPage; i++){
        if(i != 1 && i !=numOfPages ){
            if(i > numOfPages){
                break
            }
            pages.push(i)
        }
        
    }


    return(
        <PaginationContainer>
            <PaginationButton onClick={() => {changePage(currentPage-1)}}> Prev </PaginationButton>
                <PagesWrapper>
                    <PaginationItem href={"#" + 1} key={1} onClick={() => changePage(1)} className={1 == currentPage ? "current" : ""}>{1}</PaginationItem>
                        {pages.map(page => <PaginationItem  href={"#" + page} key={page} onClick={() => changePage(page)} className={page == currentPage ? "current" : ""}>{page}</PaginationItem>)}
                    { firstPage != numOfPages && numOfPages != 0 ?  <PaginationItem key={numOfPages} onClick={() => changePage(numOfPages)} className={numOfPages == currentPage ? "current" : ""}>{numOfPages}</PaginationItem> : null}
                </PagesWrapper>
            <PaginationButton onClick={() => {changePage(currentPage+1)}}> Next </PaginationButton>
        </PaginationContainer>
    )

}