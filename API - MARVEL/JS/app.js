const public_key = "53502bb0466360a13e4d8799902b10b5";
const private_key = "e0150719c761e0e14f1bb97f6b9e757e6ef83be8";
const character_url = 'https://gateway.marvel.com/v1/public/characters';
const comics_url = 'https://gateway.marvel.com/v1/public/comics';
const creadores_url ='https://gateway.marvel.com/v1/public/creators'; 
const eventos_url = 'https://gateway.marvel.com/v1/public/events';
const series_url = 'https://gateway.marvel.com/v1/public/series';
const historia_url = 'https://gateway.marvel.com/v1/public/stories';
let offset = 0;

/*async function getData (url) {

}*/
const getData = async (url, offset = 0) => {
    const timestamp = Math.floor(Date.now() / 1000)
    const hash = md5(timestamp + private_key + public_key);

    const response = await fetch(`${url}?ts=${timestamp}&apikey=${public_key}&hash=${hash}&offset=${offset}`);
    const data = response.json();
    return data;
}

function addData( data, type ){
    const dataContainer = document.getElementById('data');
    dataContainer.innerHTML =""; //depura el codigo
    if(type === "character_url"){
        data.forEach (item => {
        dataContainer.innerHTML += `
            <div class="tarjetas">
                <h2>${item.name}</h2>
                <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                <p>${item.description}</p>
            </div>
        `
    })
    } else if(type === 'comics_url'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="tarjetas">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.variantDescription}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    } else if(type === 'creadores_url'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="tarjetas">
                    <h2>${item.firstName}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.suffix}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    } else if(type === 'eventos_url'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="tarjetas">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.description}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    } else if (type === 'series_url'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="tarjetas">
                    <h2>${item.title}</h2>
                    <img src="${item.thumbnail.path +"."+item.thumbnail.extension}">
                    <p>${item.description}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    } else if (type === 'historia_url'){
        data.forEach (item => {
            dataContainer.innerHTML += `
                <div class="tarjetas">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                    <p>${item.id}</p>

                </div>
            `
        })
    }
    
};

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');



getData(character_url)
.then(response => {
    console.log(response.data.results)
    addData(response.data.results);
});



const BtnPersonajes = document.getElementById('personajes');
BtnPersonajes.addEventListener('click', () => {
    getData(character_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'character_url');

        //BOTONES DE PREV Y NEXT DE PERSONAJES 


        prevBtn.addEventListener('click', () => {
            if(offset > 20){
                offset -=20;  
            }
            getData(character_url, offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results, 'character_url');
            });
        });
        
        
        nextBtn.addEventListener('click', () => {
            offset +=20;
            getData(character_url,  offset)
            .then(response => {
                console.log(response.data.results)
                addData(response.data.results, 'character_url');
            });
        })

    });

})




const BtnComics = document.getElementById('comics');
BtnComics.addEventListener('click', () => {
    getData(comics_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'comics_url');

        //BOTONES DE PREV Y NEXT DE COMICS 

            prevBtn.addEventListener('click', () => {
                if(offset > 20){
                    offset -=20;  
                }
                getData(comics_url, offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'comics_url');
                });
            });
            
            
            nextBtn.addEventListener('click', () => {
                offset +=20;
                getData(comics_url,  offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'comics_url');
                });
            })

    });
})


const BtnCreadores = document.getElementById('creadores'); //creators
BtnCreadores.addEventListener('click', () => {
    getData(creadores_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'creadores_url');

        //BOTONES DE PREV Y NEXT DE CREADORES 


            prevBtn.addEventListener('click', () => {
                if(offset > 20){
                    offset -=20;  
                }
                getData(creadores_url, offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'creadores_url');
                });
            });
            
            
            nextBtn.addEventListener('click', () => {
                offset +=20;
                getData(creadores_url,  offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'creadores_url');
                });
            })

    });

})



const BtnEventos = document.getElementById('eventos');
BtnEventos.addEventListener('click', () => {
    getData(eventos_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'eventos_url');

        //BOTONES DE PREV Y NEXT DE EVENTOS 


                prevBtn.addEventListener('click', () => {
                    if(offset > 20){
                        offset -=20;  
                    }
                    getData(eventos_url, offset)
                    .then(response => {
                        console.log(response.data.results)
                        addData(response.data.results, 'eventos_url');
                    });
                });
                
                
                nextBtn.addEventListener('click', () => {
                    offset +=20;
                    getData(eventos_url,  offset)
                    .then(response => {
                        console.log(response.data.results)
                        addData(response.data.results, 'eventos_url');
                    });
                })


    });

})



const BtnSeries = document.getElementById('series');
BtnSeries.addEventListener('click', () => {
    getData(series_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'series_url');

            
        //BOTONES DE PREV Y NEXT DE SERIES 


            prevBtn.addEventListener('click', () => {
                if(offset > 20){
                    offset -=20;  
                }
                getData(series_url, offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'series_url');
                });
            });
            
            
            nextBtn.addEventListener('click', () => {
                offset +=20;
                getData(series_url,  offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'series_url');
                });
            })

    });

})

const BtnHistorias = document.getElementById('historias');
BtnHistorias.addEventListener('click', () => {
    getData(historia_url) 
    .then(response => {
        console.log(response.data.results)
        addData(response.data.results, 'historia_url');

        //BOTONES DE PREV Y NEXT DE HISTORIAS

        
                prevBtn.addEventListener('click', () => {
                if(offset > 20){
                    offset -=20;  
                }
                getData(historia_url, offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'historia_url');
                });
            });
            
            
            nextBtn.addEventListener('click', () => {
                offset +=20;
                getData(historia_url,  offset)
                .then(response => {
                    console.log(response.data.results)
                    addData(response.data.results, 'historia_url');
                });
            })

    });
    
})
