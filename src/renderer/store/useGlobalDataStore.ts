import {
  useEffect
} from 'react'

import { ipcRenderer } from 'electron'


const useGlobalData = () => {
  useEffect(() => {
    console.log('yy')
    ipcRenderer.send('init_files_from_dist', 'hhhh')
    ipcRenderer.on('init_files_done_reply', (event, arg) => {
      console.log(arg)
    })
  }, [])
}

export default useGlobalData
