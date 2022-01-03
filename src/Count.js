import React from 'react';

//Count component
const Count = props => {
    let styles;
   
    if(props.counter === 0 ){
        styles={
            color: 'red'
        }
    }
else if (props.counter >= 1 && props.counter <=10) {
    styles={
        color: 'orange'
    }
}

else if (props.counter >=11 && props.counter <=50){
    styles ={color: 'green'}
}

else if (props.counter >=51 && props.counter <=100){
    styles ={color: 'blue'}
}

else if (props.counter >=101 && props.counter <=500){
    styles ={color: 'Yellow'}
}

else if (props.counter >=501 && props.counter <=700){
    styles ={color: 'brown'}
}
    return(
        <div>
            <h1 style ={styles}>{props.counter} </h1>
        </div>
    );
};

export default Count;