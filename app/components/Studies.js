var React = require('react');

var styles = {
  justify: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    margin: '40px 0 40px 0'
  },
  spacer: {
      backgroundColor: 'black',
      height: 7 + 'px',
      width: 80 + 'px',
      display: 'inline-block',
      marginRight: 40 + 'px'
  },
  paddingBottom: {
    paddingBottom: 28 + 'px'
  }
};

function Studies(props) {
  return (
    <div style={styles.justify}>
      <table>
        <tr>
          <th style={styles.spacer}>
          </th>
          <th style={styles.paddingBottom}>
            Education
          </th>
        </tr>
        <tr>
          <td style={styles.paddingBottom}>Mayo 2012</td>
          <td style={styles.paddingBottom}>Ingeniero de Sistemas (con honores), de la Escuela de Ingeniería de Sistemas,
Universidad de Los Andes, Mérida - Venezuela.
Tesis: Diseño e Implementación de un Mecanismo de Arranque rápido para TCP en un
kernel Linux: Un Estudio en redes 802.11</td>
        </tr>
        <tr>
          <td style={styles.paddingBottom}>Junio 2012</td>
          <td style={styles.paddingBottom}>CCNA Exploration: LAN Switching and Wireless, Fundación Escuela Lati-
noamericana de Redes, Mérida-Venezuela.</td>
        </tr>
        <tr>
          <td style={styles.paddingBottom}>Abril 2012</td>
          <td style={styles.paddingBottom}>CCNA Exploration: Routing Protocols and Concepts, Fundación Escuela Lati-
noamericana de Redes, Mérida-Venezuela.</td>
        </tr>
        <tr>
          <td style={styles.paddingBottom}>Marzo 2012</td>
          <td style={styles.paddingBottom}>CCNA Exploration: Network Fundamentals, Fundación Escuela Latinoameri-
cana de Redes, Mérida-Venezuela.</td>
        </tr>
      </table>
    </div>
  );
};

module.exports = Studies;
