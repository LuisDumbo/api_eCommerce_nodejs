-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Mar-2023 às 18:04
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `e_comerce`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `value_items` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `items`
--

INSERT INTO `items` (`id`, `name`, `url`, `value_items`, `created_at`, `updated_at`) VALUES
(1, 'Converse', 'apostolos-vamvouras-YQbJLyY0hFU-unsplash', 30, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(2, 'Converse', 'apostolos-vamvouras-YQbJLyY0hFU-unsplash', 30, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(3, 'Converse', 'camila-damasio-mWYhrOiAgmA-unsplash', 29, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(4, 'Adidas', 'fachry-zella-devandra-bNSdIkCBJOs-unsplash', 34, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(5, 'Nike', 'imani-bahati-LxVxPA1LOVM-unsplash', 50, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(6, 'Nike', 'jakob-owens-JzJSybPFb3s-unsplash', 29, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(7, 'New Balance', 'linda-xu-fUEP0djb1hA-unsplash', 22, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(8, 'Nike', 'luis-felipe-lins-LG88A2XgIXY-unsplash', 40, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(9, 'Nike', 'maksim-larin-NOpsC3nWTzY-unsplash', 22, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(10, 'Vans', 'mnz-OJTNpLmsSHs-unsplash', 45, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(11, 'Converse', 'mojtaba-fahiminia-CQzCMx_wvk4-unsplash', 38, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(12, 'K-swiss', 'omar-prestwich-jLEGurepDco-unsplash', 46, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(13, 'Nike', 'revolt-164_6wVEHfI-unsplash', 30, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(14, 'Gussi', 'trendest-studio-XZ3EmAIWuz0-unsplash', 48, '2023-03-28 17:43:10', '2023-03-28 17:43:10'),
(15, 'Reebok', 'wengang-zhai-_fOL6ebfECQ-unsplash', 28, '2023-03-28 17:43:10', '2023-03-28 17:43:10');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
