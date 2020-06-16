function populateUFs() {
    const ufSelect = document.querySelector('select[name=uf]')

    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function(data){
            for(const state of data){
                ufSelect.innerHTML += `<option value="${state.sigla}">${state.nome}</option>`
            }
        }
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector('[name=city]')
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = '<option value>Selecione a Cidade</option>'
    citySelect.disable = true

    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function(data){
            for(const city of data){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false
        }
    })
}

document.querySelector('select[name=uf]').addEventListener('change', getCities)



$(document).ready(function(){
    
    $('#cep').focusout(function(){
        let cep = $('#cep').val()

        cep = cep.replace("-","")
        cep = cep.replace(".","")

        const url = `https://viacep.com.br/ws/${cep}/json`

        $.ajax({
            url: url,
            type: 'get',
            dataType: 'json',
            success: function(data){
                const ufSelect = document.querySelector('select[name=uf]')
                const citySelect = document.querySelector('[name=city]')

                $('#address').val(data.logradouro)
                $('#addressnumber').val(data.complemento)
                $('#neighborhood').val(data.bairro)
                
                if(!data.erro){
                    citySelect.innerHTML = `<option value="${data.localidade}">${data.localidade}</option>`
                    citySelect.disabled = false

                    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${data.uf}`

                    $.ajax({
                        url: url,
                        type: 'get',
                        dataType: 'json',
                        success: function(data){
                            ufSelect.innerHTML = `<option value="${data.sigla}">${data.nome}</option>`

                            const stateInput = document.querySelector("[name=state]")
                            stateInput.value = data.nome
                        }
                    })
                }
            }
        })
    })
})