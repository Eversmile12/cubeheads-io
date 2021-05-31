import styled from "styled-components"

const StyledUl = styled.ul`
     line-height: 4rem;
     margin: 0 0 3rem 2rem;
     @media(max-width: 768px){
          line-height: 4rem;
     }
`;


const DescriptionBox = function(){
   
            return (<StyledUl>
                         <li>
                              <p> Get <strong>twice interviews</strong> with half the effort.</p>
                         </li>
                         <li>
                              <p> Find out the most <strong>in demand industry skills.</strong></p>
                         </li>
                         <li>
                              <p> Browse a <strong>worldwide database</strong> of 100+ studios.</p>
                         </li>
                </StyledUl>)           
}

export default DescriptionBox;