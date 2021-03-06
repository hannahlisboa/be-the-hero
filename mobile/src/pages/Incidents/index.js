import React, {useEffect, useState} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import api from '../../services/api'
import ImgLogo from '../../assets/logo.png'
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation()
  const [incidents, setIncidents] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    loadIncidents()
  },[])

  async function loadIncidents(){
    try {
      if (loading){
        return
      }
      if(total>0 && incidents.length === total){
        return
      }

      setLoading(true)
      const response = await api.get('incidents',{
        params:{page}
      })
      setIncidents([...incidents, ...response.data])
      setTotal(response.headers['x-total-count'])
      setPage(page+1)
      setLoading(false)

    } catch (error) {
      Alert('Ops! Ocorreu um problema, tente novamente')
    }
  }

  function navigationToDetail(incident){
    navigation.navigate('Detail', {
      incident
    })
  }
  return (
    <View  style={styles.container}>
      <View style={styles.header}>
        <Image source={ImgLogo}/>
        <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>{`${total} casos`}
             </Text>
             .
          </Text>
      </View>
      <Text style={styles.title}>Bem vindo!!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={(incident)=> incident.id}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        //desestrutura o objeto pegando o item(esse é o objeto) depois renomeia para incidemnt
        renderItem={({item: incident})=>(
          <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{incident.name}</Text>

              <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR', 
          {style: 'currency', 
          currency: 'BRL'})
          .format(incident.value)}</Text>
              <TouchableOpacity 
                style={styles.detailButton}
                onPress={()=>navigationToDetail(incident)}>
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name='arrow-right' size={16} color="#e02041"/>
              </TouchableOpacity>
           </View>

        )}
      />
    </View>
  );
}
