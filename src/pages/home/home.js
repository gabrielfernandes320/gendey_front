import React from "react";
import "./home.scss";
import {
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  useTheme,
  Chip,
  Collapse,
  IconButton,
} from "@material-ui/core";

export default function Home() {
  const cards = [
    {
      CodTicket: "#20-0001",
      CodSuporteEquipe: 1,
      NomUsuario: "Sérgio Gabriel Junior",
      CodCliente: 60,
      NomCliente: "Bunge Paranagua",
      CodSuporteMotivo: 7,
      NomSuporteMotivo: "Software - SCADA",
      TipPrioridade: 0,
      Prioridade: "Baixa",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Histórico de Analógicas - SCADA Terminal 412",
      DatAbertura: "2020-08-31T17:30:45",
      DataUltimaResposta: "2020-09-01T08:07:42.21",
      UltimaResposta:
        "realmente não há consulta de histórico para a aplicação, será necessário desenvolver. informei ao cliente que caso necessite, enviar por e-mail a solicitação",
      Tags: "",
    },
    {
      CodTicket: "#20-0002",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 483,
      NomCliente: "Cibra Fertilizantes Candeias",
      CodSuporteMotivo: 7,
      NomSuporteMotivo: "Software - SCADA",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Adição de totalizadores de expedição na tela",
      DatAbertura: "2020-09-01T08:11:13.947",
      DataUltimaResposta: "2020-09-01T11:35:36.027",
      UltimaResposta:
        "O Paulo e o Gilvan entraram em contato relatando que a totalização não estava acontecendo exatamente como eles precisavam. Foi realizado acesso remoto e corrigido para ficar de acordo com o solicitado.",
      Tags: "Totalizadores",
    },
    {
      CodTicket: "#20-0003",
      CodSuporteEquipe: 1,
      NomUsuario: "Sérgio Gabriel Junior",
      CodCliente: 18,
      NomCliente: "Castrolanda Castro",
      CodSuporteMotivo: 5,
      NomSuporteMotivo: "Software - PLC",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Ajustar dois acionamentos de equipamentos",
      DatAbertura: "2020-09-01T08:11:21.65",
      DataUltimaResposta: "2020-09-01T08:13:01.587",
      UltimaResposta:
        "Itens ajustados no PLC. Segundo retorno do Sr. Mateus, os acionamentos ficaram de acordo.",
      Tags: null,
    },
    {
      CodTicket: "#20-0004",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 193,
      NomCliente: "ATEXP",
      CodSuporteMotivo: 10,
      NomSuporteMotivo: "Outros",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto:
        "Configuração do PC que será usado como viewer no painel central",
      DatAbertura: "2020-09-01T08:26:09.51",
      DataUltimaResposta: "2020-09-02T11:57:20.447",
      UltimaResposta:
        "Aguardando informação do pessoal para realizar a troca dos computadores:\r\n-Viewer atual será o SVR\r\n-Computador recém configurado será o novo Viewer",
      Tags: "Configuração",
    },
    {
      CodTicket: "#20-0005",
      CodSuporteEquipe: 1,
      NomUsuario: "Renato Ribas Campos",
      CodCliente: 168,
      NomCliente: "Yara Fertilizantes Rondonopolis",
      CodSuporteMotivo: 4,
      NomSuporteMotivo: "Elétrica - Comandos",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Falha de comunicação com Gateway",
      DatAbertura: "2020-09-01T15:51:13.227",
      DataUltimaResposta: "2020-09-01T15:53:21.697",
      UltimaResposta:
        "Testamos a comunicação com PLC e estava respondendo.\r\nTesatamos a comunicação com o gateway e o mesmo não estava repondendo. Repassamos para o mesmo reiniciar o equipamento. Logo em seguida foi possivel reestabelecer a conexão.\r\n",
      Tags: "Gateway, Prosoft, Comunicação, Falha",
    },
    {
      CodTicket: "#20-0006",
      CodSuporteEquipe: 1,
      NomUsuario: "Renato Ribas Campos",
      CodCliente: 184,
      NomCliente: "Realengo Santo Antonio da Patrulha",
      CodSuporteMotivo: 6,
      NomSuporteMotivo: "Software - Sistemas",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto: "Filtro em relatórios - Gráficos",
      DatAbertura: "2020-09-01T16:05:28.307",
      DataUltimaResposta: "2020-09-01T16:25:35.417",
      UltimaResposta:
        "Acessamos remotamente e verificamos que o filtro do relatório não estava ocorrendo apenas naquela analogica, e as demais estava filtrando corretamente.\r\nVerificamos no BD e estava atualizando os valores.\r\nEntramos em contato com o Mateus, que desenvolveu a aplicação e o mesmo repassou para enviarmos o backup da aplicação para analise.\r\nRepassamos conforme solicitado.",
      Tags: "Relatórios, Gráficos, Filtro",
    },
    {
      CodTicket: "#20-0007",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 131,
      NomCliente: "Yara Fertilizantes Sumare",
      CodSuporteMotivo: 10,
      NomSuporteMotivo: "Outros",
      TipPrioridade: 2,
      Prioridade: "Alta",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto:
        "Uma produção foi agendada mas não iniciava a dosagem na balança BL-01",
      DatAbertura: "2020-09-01T16:17:28.65",
      DataUltimaResposta: "2020-09-01T16:19:00.18",
      UltimaResposta:
        "Foi realizado acesso remoto e verificou-se que o passo 01 (bortrac) estava ocupado, porém a balança não foi ocupada e por isso não iniciou a dosagem. Como não havia sido dosado nada ainda, o passo foi apagado e a produção liberada novamente, assim a dosagem iniciou corretamente.",
      Tags: "Dosagem, Produção, Passo01",
    },
    {
      CodTicket: "#20-0008",
      CodSuporteEquipe: 1,
      NomUsuario: "Sérgio Gabriel Junior",
      CodCliente: 42,
      NomCliente: "Syngenta Seeds Formosa",
      CodSuporteMotivo: 5,
      NomSuporteMotivo: "Software - PLC",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto: "Atualização Carta Psicometrica - Secadores 1/4",
      DatAbertura: "2020-09-01T17:36:24.57",
      DataUltimaResposta: "2020-09-01T17:40:10.57",
      UltimaResposta: "Ainda em fase de homologação da atualização",
      Tags: null,
    },
    {
      CodTicket: "#20-0009",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 218,
      NomCliente: "Yara Fertilizantes Sao Luiz",
      CodSuporteMotivo: 10,
      NomSuporteMotivo: "Outros",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 0,
      Situacao: "Aberto",
      DesAssunto: "Licenças da Rockwell",
      DatAbertura: "2020-09-02T11:39:34.76",
      DataUltimaResposta: "2020-09-02T11:42:44.68",
      UltimaResposta:
        "Também, aproveitei o acesso para fazer backup da maquina virtual com as licenças certas",
      Tags: "Rockwell, Licenças, Ftview, Factorytalk, Rslinx",
    },
    {
      CodTicket: "#20-0010",
      CodSuporteEquipe: 1,
      NomUsuario: "Sérgio Gabriel Junior",
      CodCliente: 18,
      NomCliente: "Castrolanda Castro",
      CodSuporteMotivo: 5,
      NomSuporteMotivo: "Software - PLC",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Transporte de transferencia de granel com status de erro",
      DatAbertura: "2020-09-02T11:50:57.993",
      DataUltimaResposta: "2020-09-02T11:51:40.93",
      UltimaResposta:
        "Havia um equipamento com status de erro porém o mesmo não estava mais sendo utilizado naquele transporte, fiz a atualização no PLC e o transporte ficou ok",
      Tags: null,
    },
    {
      CodTicket: "#20-0011",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 193,
      NomCliente: "ATEXP",
      CodSuporteMotivo: 3,
      NomSuporteMotivo: "Elétrica - Acionamentos",
      TipPrioridade: 0,
      Prioridade: "Baixa",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto: "Leitura de corrente via rede dos inversores G120",
      DatAbertura: "2020-09-03T11:28:42.197",
      DataUltimaResposta: "2020-09-03T11:31:54.463",
      UltimaResposta:
        "Foi passado ao Evaldo para verificar os parametros p2051, index [02], do inversor G102. Este parametro deveria estar como r0068 para efetuar a leitura da corrente no supervisório, porém estava diferente.\r\nFoi passado a ele para alterar o parametro p0922 para o valor 999, assim ele pode alterar o parametro p2051, index [02], para r0068.\r\n\r\nTambém, o parametro que define a corrente nominal do motor (p2002) estava em 93.",
      Tags: "G120, Profinet, Pzd, Corrente",
    },
    {
      CodTicket: "#20-0012",
      CodSuporteEquipe: 1,
      NomUsuario: "Renato Ribas Campos",
      CodCliente: 46,
      NomCliente: "Syngenta Seeds Uberlandia",
      CodSuporteMotivo: 9,
      NomSuporteMotivo: "Solicitação do Cliente",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 3,
      Situacao: "Fechado",
      DesAssunto: "Alteração de produto na linha",
      DatAbertura: "2020-09-03T13:35:48.523",
      DataUltimaResposta: "2020-09-03T13:38:49.367",
      UltimaResposta:
        "Acessamos a aplicação e analisamos a mesma.\r\nVerificamos que se tratava de uma alteração por solicitação e que não haviamos recebido o e-mail formalizando a mesma.\r\nRepassamos para o Sr.Rossany para nos enviar a confirmação da alteração.\r\nO mesmo ficou de repassar por e-mail.",
      Tags: "Impressora, Impressão, Etiqueta",
    },
    {
      CodTicket: "#20-0013",
      CodSuporteEquipe: 1,
      NomUsuario: "Sérgio Gabriel Junior",
      CodCliente: 60,
      NomCliente: "Bunge Paranagua",
      CodSuporteMotivo: 5,
      NomSuporteMotivo: "Software - PLC",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto: "Adicionar atraso de desligamento no EC506",
      DatAbertura: "2020-09-03T15:41:35.87",
      DataUltimaResposta: "2020-09-03T15:42:37.853",
      UltimaResposta:
        "Atualizada a lógica de atraso de desligamento mas deixado em by-pass devido a falta de disponibilidade de testes junto da operação. A lógica de desalinhamento será carregada também quando houver disponibilidade para testes.",
      Tags: null,
    },
    {
      CodTicket: "#20-0014",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 191,
      NomCliente: "Yara Fertilizantes Uberaba",
      CodSuporteMotivo: 2,
      NomSuporteMotivo: "Operação - Erro de Procedimento",
      TipPrioridade: 2,
      Prioridade: "Alta",
      TipSituacao: 0,
      Situacao: "Aberto",
      DesAssunto:
        "A máquina virtual de operação estava atualizando o windows em 88% há mais de uma hora",
      DatAbertura: "2020-09-03T20:11:25.743",
      DataUltimaResposta: "2020-09-03T20:12:48.68",
      UltimaResposta:
        "Foi realizado acesso remoto e verificou-se que a atualização estava demorando muito. Foi então cancelada a atualização, desligando a VM. Quando ela ligou novamente, cancelou as alterações. Após iniciar normalmente, o Windows Update foi desabilitado.",
      Tags: "Vm, Windows10, Update, Yara, Uba2_m2",
    },
    {
      CodTicket: "#20-0015",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 459,
      NomCliente: "Yara Fertilizantes Catalao",
      CodSuporteMotivo: 7,
      NomSuporteMotivo: "Software - SCADA",
      TipPrioridade: 1,
      Prioridade: "Média",
      TipSituacao: 2,
      Situacao: "Resolvido",
      DesAssunto: "Janela de equipamento não fechava e não dava comandos",
      DatAbertura: "2020-09-03T20:30:26.697",
      DataUltimaResposta: "2020-09-03T20:31:49.383",
      UltimaResposta:
        "Foi realizado acesso remoto para verificar o problema e fechamos a aplicação. Após iniciar a aplicação, a janela voltou a funcionar corretamente. Será verificado juntamente com a equipe de suporte a possível causa para o problema e entraremos em contato caso seja necessário realizar alguma atualização.",
      Tags: "Ftview, Janela, Equipamento, Registro",
    },
    {
      CodTicket: "#20-0016",
      CodSuporteEquipe: 1,
      NomUsuario: "Cassio Trapp Kruger",
      CodCliente: 460,
      NomCliente: "Yara Fertilizantes Cascavel",
      CodSuporteMotivo: 8,
      NomSuporteMotivo: "Mecânica",
      TipPrioridade: 2,
      Prioridade: "Alta",
      TipSituacao: 1,
      Situacao: "Pendente",
      DesAssunto: "Dosagem do procote dando peso divergente em campo",
      DatAbertura: "2020-09-04T11:34:54.29",
      DataUltimaResposta: "2020-09-04T11:35:09.463",
      UltimaResposta:
        "Foi realizado acesso remoto para acompanhar e verificou-se que o funcionamento estava OK, tanto da lógica (pois ela não muda) quanto da operação (o procedimento de calibração estava correto).\r\nEm conversa com o Fabio, verificou-se que a válvula de dosagem foi trocada recentemente. Portanto, uma das hipóteses para a divergência no peso dosado, é que a pressão do ar comprimido não seja suficiente para fechar a válvula rapidamente. Desta forma, a totalização é encerrada quando o comando é retirado, mas em campo a válvula não fechou completamente, fazendo com que mais material passe pela tubulação.\r\n\r\nOutra hipótese, é que o funcionamento da bomba não seja linear. Isto é, para os primeiros segundos dela ligada, a relação de gramas/100ms seria X, para os próximos 8 segundos (por exemplo) a relação gramas/100ms seria Y.\r\nO Fabio estava fazendo a aferição com 4 segundos. Uma sugestão é fazer a aferição com 8 ou 9 segundos e verificar a relação de gramas/100ms. \r\nCaso a bomba tenha um funcionamento próximo ao linear, a diferença entre a relação para a aferição de 4 segundos e a de 8 segundos deve ser mínima; caso a bomba trabalhe de forma não linear, a diferença será considerável, causando a divergência no peso dosado.\r\n",
      Tags: "Procote, Dosagem, Tempo, Calculado",
    },
  ];

  const useStyles = makeStyles({
    root: {
      maxWidth: "100%",
      width: "100%",
      minWidth: "10%",
      margin: "4px 5px 10px",
    },

    expandOpen: {
      transform: "rotate(180deg)",
    },
    // chip: {
    //   marginTop: "2%",
    //   // display: "flex",
    //   justifyContent: "left",

    //   flexWrap: "wrap",
    //   "& > *": {
    //     margin: theme.spacing(0.5),
    //   },
    // },
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="form-container">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {cards.map((item) => (
            <Card
              key={item.CodTicket}
              className={classes.root}
              defaultValue={item.CodTicket}
            >
              <CardContent>
                <Typography variant="body2" color="error">
                  {item.CodTicket}{" "}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
